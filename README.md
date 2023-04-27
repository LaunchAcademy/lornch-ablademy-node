
# Welcome to Lornch Ablademy

_Definitely not a ripoff of Launch Academy, no sir-ee!_

## Installation

```no-highlight
createdb lornch_ablademy_development
yarn install
yarn run dev
```

## Entity Criteria

```no-highlight
### Clinics

* Must have a title
* Must have a speaker
* Can optionally have a description
* Can have many questions
* Can have many students

### Questions

* Must have an asker
* Must have a body
* Belongs to a single clinic
* Note: for simplicity, questions will not belong to a student 

### Students

* A student must have a name
* A student can attend many clinics
```

## Features

_For simplicity, there is no index page in React for this app, however, there is an index API endpoint._

- Clinic show page (show information is already present, we need to add all of the questions for a Clinic both front-end and back-end)
- See Questions for a Clinic on a Clinic show
- Add a new Question for a Clinic

## Order of Operations

- Create ER diagram
- **Before adding any code** make sure the application works in its initial state

- Add a serializer for the Clinic show route (no timestamps)
- **Ensure** the API endpoint returns serialized data

- Generate migrations and models with necessary constraints and validations
- **Ensure** that new records can be created from those new tables (`yarn console`)
- **Ensure** proper model validations are being evaluated

- Add `relationMappings` for associated queries
- **Ensure** that the `relationMappings` return the correct data

- From the Clinic show route, query for the associated Questions
- **Ensure** that the API endpoint returns the data we expect

- Display Questions for a given Clinic on the page
- Create a nested router to persist a Question for a Clinic
- **Ensure** that adding a new Question for a Clinic will appear on the page
