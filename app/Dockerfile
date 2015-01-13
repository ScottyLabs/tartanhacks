# DOCKER-VERSION 1.2.0
# @file Dockerfile
# @brief The dockerfile for the Node.js app container.  Uses nodemon to
# livereload code during development.  *Not production viable*
# @author Oscar Bezi, oscar@bezi.io
# @since 7 January 2015
#===============================================================================
FROM node:0.10
MAINTAINER Oscar Bezi

# replace sh with bash so I can use if statements below
ENTRYPOINT ["/bin/bash", "-c"]

RUN npm install -g coffee-script
# after deploy replace this with production solution
RUN npm install -g nodemon

# where the production files will go
RUN mkdir -p /opt/app
WORKDIR /opt/app

# The npm install directory, we will symlink it at runtime since the fig volume
# would overwrite it at compile time
RUN mkdir -p /tmp/app
ADD package.json /tmp/app/package.json
RUN cd /tmp/app && npm install

# Links in the node_modules directory right before running
# @TODO: use a script?  Clean this up?  Leave as is?
CMD if [ -d /opt/app/node_modules ]; then rm -rf /opt/app/node_modules; fi; ln -s /tmp/app/node_modules /opt/app/node_modules; nodemon server.coffee;
