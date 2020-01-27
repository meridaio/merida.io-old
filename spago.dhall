{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "merida.io"
, dependencies = [ "console", "effect", "psci-support", "react-basic" ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}
