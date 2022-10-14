// useBattle hook - src/hooks/useBattle.js

// Language: javascript
// Path: src/hooks/useBattle.js
// Compare this snippet from src/containers/PokemonBattle.js:
import {useState} from "react";

export const useBattle = ({pokemon1, pokemon2}) => {
    // Lets create the following state:
    //     - battleState: the battle state
    //     - battleActions: the battle actions
    const [battleState, setBattleState] = useState({
        pokemon1,
        pokemon2,
        winner: null,
        battleStarted: false,
        battleFinished: false,
    });
    const battleActions = {
        startBattle: () => {
            setBattleState({
                ...battleState,
                battleStarted: true,
            });
        },
        finishBattle: winner => {
            setBattleState({
                ...battleState,
                winner,
                battleFinished: true,
            });
        },
    };

    return [battleState, battleActions];
}