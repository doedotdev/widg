ben
===============================

ben

Installation
------------

To install use pip:

    $ pip install ben

For a development installation (requires [Node.js](https://nodejs.org) and [Yarn version 1](https://classic.yarnpkg.com/)),

    $ git clone https://github.com/ben/ben.git
    $ cd ben
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --overwrite --sys-prefix ben
    $ jupyter nbextension enable --py --sys-prefix ben

When actively developing your extension for JupyterLab, run the command:

    $ jupyter labextension develop --overwrite ben

Then you need to rebuild the JS when you make a code change:

    $ cd js
    $ yarn run build

You then need to refresh the JupyterLab page when your javascript changes.
