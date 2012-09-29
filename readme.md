Introduction
============

I am a big fan of Prototypejs. It's simplistic, and provides excellent polyfill methods for browsers that do not support modern browser features.
I definitely respect the work that was put in to **prototype-node**, but I found the port was too closely tied to the way that browsers execute javascript, instead of the way that NodeJS executes javascript. I wanted to see if I could do better, so I forked  **prototype-node**.

My intention is to provide equal results with the browser version of Prototypejs, even if the code isn't exactly the same.


Tasks
-----

* Convert existing library to better manage scope, and bring more in line with CommonJS practices.
* Investigate ways to improve performance
* Create unit tests with the goal of each test passing in both the browser and nodejs. Test coverage should match major features, using examples pulled from the API when possible.
* Create npm package
* ???

Progress
--------

Partially converted parts of existing library. I have also written some unit tests using the Mocha testing platform. The tests are not as comprehensive as the unit tests prototype provides, but the goal isn't to rewrite all of prototypes tests, just for major features. I have also identified and resolved an issue that was preventing me from extending the Hash object in another project.

Credits
-------

PrototypeJS - https://github.com/sstephenson/prototype
prototype.node.js - https://github.com/Rixius/prototype.node.js