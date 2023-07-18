import React from 'react';

export interface WordProps {
    word: string
    collection: number
}

const Word = (props: WordProps) => {
    return (<button>{props.word}</button>)
}

export default Word
