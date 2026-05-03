import * as vscode from 'vscode';

export function isDarkTheme() {
    switch(vscode.window.activeColorTheme.kind) {
        case vscode.ColorThemeKind.Dark:
        case vscode.ColorThemeKind.HighContrast:
            return true;
        default:
            return false;
    }
}