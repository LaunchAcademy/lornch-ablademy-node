# Welcome to Lornch Ablademy!

_Definitely not a ripoff Launch Academy, no sir-ee!_

### Installation

```no-highlight
createdb lornch_ablademy_development
yarn install
yarn run dev
```

Entity Criteria

```no-highlight
#### Clinics

* Must have a title
* Must have a speaker
* Can optionally have a description
* Can have many questions
* Can have many students

#### Questions

* Must have an asker
* Must have a body
* Belongs to a single clinic

#### Students

* A student must have a name
* A student can attend many clinics
```

## Features

_For simplicity, there is no index page for this app_

- clinic show page (show information is already present, we need to add all of the questions for a clinic, both front-end and back-end)
- Add questions for a clinic on the clinic show
- Add a new question for a clinic

## Order of Operations

- Create an ER diagram
- Generate models and migrations
- Add `relationMappings`
- Test creating objects and calling on associations in the `yarn console`
- Ensure that questions for a given clinic appear on the page
- Ensure that adding a new question for a clinic adds that to the page
- Create our own nested router and persist!
- Serializer
- Open time for Q&A
