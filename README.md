# super-cmd
Command wrappers for Windows command prompt

## How to setup?
<pre>
1) Install Node.js
2) Clone (Using git) or download the repo to a folder
3) Add the repo path to the system environment path variable
4) Edit the s.bat and replace the path of the cloned/downloaded repo
5) open cmd and try running the commands
</pre>

## Availble Commands
<pre>
c                           - opens a new cmd instance from user home
c [path]                    - opens a new cmd instance from the given path
home                        - navigates to user home directory
touch [file]                - creates an empty file
w                           - opens a new file explorer instance
w [path]                    - opens a new file explorer instance from the given path
s md5sum [path-to-the-file] - get the md5 sum for the file
s ll                        - Basic Linux ll command wrapper using dir command
s ls                        - Basic Linux ls command wrapper using dir command
</pre>