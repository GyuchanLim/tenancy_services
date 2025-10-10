# Description
Tenancy Services is a _revamp_ of https://www.tenancy.govt.nz/rent-bond-and-bills/market-rent/ written in ⚛️ [React](https://react.dev/) using⚡ [Vite](https://vite.dev/)  [TypeScript](https://www.typescriptlang.org/). It is a [single page web application](https://developer.mozilla.org/en-US/docs/Glossary/SPA) that makes use of powerful [Rails API](https://api.rubyonrails.org/) to communicate to external API and render the results on the page for user to see.

It has 2 goals
- to integrate with many of the NZ Govt's public APIs
- to learn more about TypeScript syntax

### Installation

**Ubuntu/Linux only**
```
# upgrade essential build packages in linux
sudo apt update
sudo apt install -y build-essential libssl-dev libreadline-dev zlib1g-dev \
  libyaml-dev libffi-dev libgdbm-dev libncurses5-dev automake libtool bison
```

**Install postgresql**
Follow steps in https://www.postgresql.org/download/linux/ubuntu/

or...

```
sudo apt install -y postgresql-common
sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
sudo apt install postgresql-18
```

**ONLY IN DEVELOPMENT**
```
user:~$ sudo -i -u postgres
postgres@user:~$ psql
postgres=# ALTER USER postgres PASSWORD 'mynewpassword';
```

**rbenv**
```
git clone htps://github.com/rbenv/rbenv.git ~/.rbenv
```

**ruby-build**
```
git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
```

**Install ruby version specified in [.ruby_version](https://github.com/GyuchanLim/tenancy_services/blob/task/addGetStartedDoc/.ruby-version)**
```
rbenv install ruby-3.4.1
rbenv local ruby-3.4.1
rbenv global ruby-3.4.1
```

**Verify correct version**
```
rbenv local
rbenv global
```

**Install gems**
```
bundle install
```

**Setup DB**

```
rails db:create
rails db:migrate
rails db:migrate:status
```

**Install npm and packages**
```
sudo apt install npm
npm install
```

**run vite server**
```
npm run dev
```

**Set up ENV vars PLEASE**

### Get started
You will need access to the public APIs and specifically [Tenancy Services](https://portal.api.business.govt.nz/apis#tags=TenancyServices) request for access [here](https://portal.api.business.govt.nz/).

You'll also need to spin up 2 different applications
- Vite `yarn dev`
- Rails `Rails s`

1. Visit the vite server
2. Navigate to market rent tab
3. Press `select` with the default options
4. Play around with the search params

### Improvements
- Make use of the `area_definitions` endpoint to replace the text box search param to a dropdown
- Display the result in a formatted table
- Implement an option to display the past year's worth of results as a graph
