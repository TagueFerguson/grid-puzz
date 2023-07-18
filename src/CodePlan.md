# Code Plan

## Ubiquitos Language

* **Collection** - Four words which are linked and used in the game
* **Word** - Single or multiple words that can be guessed upon and linked to one another for the user to guess a collection


## State Management

### What do I need to achieve

    * The words of each collection can be displayed
    * The words of each collection can be guessed upon


    1. One way of doing this is pass down a word but also pass down a number corresponding to the collection. When they guess, the guess functionality maps between words and checks the collection id is the same. If so, they are successful.