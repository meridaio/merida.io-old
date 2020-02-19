module Page.Blog where

import Prelude

import Effect (Effect)
import Data.Array (sortBy)
import React.Basic.DOM as R
import React.Basic.Hooks (ReactComponent, JSX, component, element)
import React.Basic.Hooks as React
import Utils.ReactHelpers (p)

foreign import link
  :: ReactComponent
    { to :: String
    , children :: Array JSX
    }

type FrontMatter =
  { date :: String
  , path :: String
  , title :: String
  }

mkPost :: FrontMatter -> JSX
mkPost f = R.li
  { children:
    [ element link
        { to: f.path
        , children: [ R.text f.title ] }
    ]
  }

mkBlog :: Array FrontMatter -> Effect (ReactComponent {})
mkBlog a = do
  component "Blog" \props -> React.do
    pure
      $ p "Welcome to my blog!" <>
        p "This is my blog where I blog about lots of stuff!" <>
        R.ul
          { children: map mkPost $ sortBy (\x y -> compare y.date x.date) a
          }