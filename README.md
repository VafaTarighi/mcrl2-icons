# mCRL2 File Icons

Custom file icons for mCRL2 formal verification file types.

## Features

- **Custom icons** for mCRL2 formal verification file formats
- **Automatic theme switching** between light and dark icon variants based on your VS Code color theme
- **Auto-activation** when opening projects containing `.mcrl2` files

## Supported File Types

| Extension | Description |
|-----------|-------------|
| `.mcrl2` | mCRL2 process specification files |
| `.lps` | Linear Process Specification files |
| `.lts` | Labelled Transition System files |
| `.pbes` | Parameterised Boolean Equation System files |
| `.aut` | Aldebaran format transition system files |
| `.fsm` | Finite State Machine files |
| `.mcf` | Modal μ-Calculus Formula files |
| `.trc` | Trace files |
| `.xml` | XML files (mCRL2 context) |

## Installation

1. Install from the VS Code Marketplace
2. Open a project containing `.mcrl2` files
3. The icon theme will activate automatically and set itself in `.vscode/settings.json`

Alternatively, manually activate via:
- `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
- Type "Preferences: File Icon Theme"
- Select **mCRL2 Icons (Light)** or **mCRL2 Icons (Dark)**

## Theme Switching

The extension automatically detects your VS Code color theme and switches between light and dark icon variants:

- **Light themes** → Light icon set with darker, more visible icons
- **Dark themes** → Dark icon set with lighter, more visible icons

No manual configuration needed—just change your color theme and the icons update automatically.

## Requirements

- VS Code 1.75.0 or higher

## About mCRL2

[mCRL2](https://mcrl2.org/) is a formal specification language with an extensive toolset for modelling, validation and verification of concurrent systems and protocols.

## License

MIT

## Contributing

Found an issue or have a suggestion? Please open an issue on [GitHub](https://github.com/VafaTarighi/mcrl2-icons).
