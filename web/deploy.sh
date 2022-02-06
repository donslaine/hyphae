#!/bin/bash

aws s3 sync . s3://hyphae-web
#  not needed for local dev
# aws cloudfront create-invalidation --distribution-id E184CB9I33JSO4 --paths "/*"