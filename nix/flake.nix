{
  description = "Flake for light web environments (no npm or node)";

  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = {nixpkgs, ...}: let
    # The systems supported for this flake
    supportedSystems = [
      "x86_64-linux" # 64-bit Intel/AMD Linux
      "aarch64-linux" # 64-bit ARM Linux
      "x86_64-darwin" # 64-bit Intel macOS
      "aarch64-darwin" # 64-bit ARM macOS
    ];

    # Helper to provide system-specific attributes
    forEachSupportedSystem = f:
      nixpkgs.lib.genAttrs supportedSystems (
        system:
          f {
            pkgs = import nixpkgs {inherit system;};
          }
      );
  in {
    devShells = forEachSupportedSystem (
      {pkgs}: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            # Language Servers
            vscode-langservers-extracted
            typescript
            typescript-language-server
            emmet-language-server

            nodejs_20

            # Formatter
            nodejs_20.pkgs.prettier

            # Live Reload
            live-server
          ];
          env = {
            VUE_TYPESCRIPT_PLUGIN = "${pkgs.vue-language-server}/lib/node_modules/@vue/language-server/node_modules/@vue/typescript-plugin";
            TSSERVERJS = "${pkgs.typescript}/lib/node_modules/typescript/lib";
          };
        };
      }
    );
  };
}
