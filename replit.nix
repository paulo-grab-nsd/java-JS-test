{ pkgs }: {
  deps = [
    pkgs.texinfoInteractive
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
    pkgs.graalvm17-ce
    pkgs.maven
    pkgs.replitPackages.jdt-language-server
    pkgs.replitPackages.java-debug
  ];
}