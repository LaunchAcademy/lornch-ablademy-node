
# Welcome to Lornch Ablademy!
*Definitely not a ripoff Launch Academy, no sir-ee!

### Installation

```no-highlight
createdb lornch_ablademy_development
yarn install
yarn run dev
```

Entity Criteria 
```
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
* clinic list page (migration and model completed, just need to add `relationMappings`)
* clinic show page (show information is already present, we need to add all of the questions for a clinic both frontend and backend)

## Order of Operations
- Ensure ER diagram
- generate models and migrations
- add relationMappings 
- navigate to pages by feature, and ensure they work as expected, adding code to routers accordingly 
- dig a smidge more deeply into persisting
- open time for Q&A