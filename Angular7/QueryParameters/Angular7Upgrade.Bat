call npm i
call npm i @angular/cli@latest --save-dev
call npm i @angular-devkit/build-angular@latest --save-dev
call ng update --all --force
call npm i typescript@3.1.6 --save-dev
call npm i
call npm audit fix
call npm install -g rxjs-tslint
call rxjs-5-to-6-migrate -p src/tsconfig.app.json