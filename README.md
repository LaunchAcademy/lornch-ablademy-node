
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