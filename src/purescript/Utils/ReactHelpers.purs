module Utils.ReactHelpers where

import React.Basic (JSX)
import React.Basic.DOM as R

p :: String -> JSX
p s = R.p { children: [R.text s] }
