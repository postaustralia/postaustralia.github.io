#!/bin/bash
git push origin `git subtree split --prefix resources/public develop`:master --force

