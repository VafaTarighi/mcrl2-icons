import * as vscode from 'vscode';
import { updateForTheme } from './updateForTheme';

export function activate(context: vscode.ExtensionContext) {
	updateForTheme(vscode.window.activeColorTheme);
	context.subscriptions.push(
		vscode.window.onDidChangeActiveColorTheme(updateForTheme)
	);
}

export function deactivate() {}