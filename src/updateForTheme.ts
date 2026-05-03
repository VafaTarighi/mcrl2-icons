import * as vscode from 'vscode';
import { isDarkTheme } from './isDarkTheme';

export function updateForTheme(theme: vscode.ColorTheme) {
	const config = vscode.workspace.getConfiguration();
	config.update("workbench.iconTheme", `mcrl2-icons-${isDarkTheme() ? "dark":"light"}`);
}