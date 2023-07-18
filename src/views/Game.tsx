import React from 'react';
import Word, { WordProps } from '../components/Word'
import easyGame from "../fixtures/easyGame.json"

interface Collection {
    words: Array<string>
    explanation: string
}

interface GameState {
    guesses: Array<string>
    words: Array<WordProps>
}

interface GameProps {}

class Game extends React.Component<GameProps, GameState> {

    constructor() {
        super({})
        this.state = {
            "guesses": [],
            "words": []
        }
    }

    componentDidMount() {
        const flattenWords = easyGame.words.reduce((acc: Array<WordProps>, ele: Collection, index) => {
            const wordsWithCollectionId = ele.words.map((word) => ({ "word": word, "collection": index }))
            acc = acc.concat(wordsWithCollectionId)
            return acc;
        }, [])

        this.setState({
            words: flattenWords
        })
    }

    addGuess() {

    }



    render() {
        return (
            <div>
                {this.state.words.map((props: WordProps) => {
                    return (<Word {...props} />)
                })}
            </div>
        )
    }
}

export default Game
