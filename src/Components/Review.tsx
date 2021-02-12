import React from 'react'
import { Preview } from '../Global/Types'
import { Grid, Button } from '@material-ui/core';
import _ from 'lodash';

export const Review: React.FC<Preview> = ({ step, initValues, setValues }) => {

    var keys = [];

    for (const [key] of Object.entries(initValues)) {
        keys.push(key);
    }

    function UpperCaseArray(input: string) {
        var result = input.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
        var finalResult = result.replace(",", " ");
        for (var i=0; i<finalResult.length; i++) {
            if (finalResult[i] === ',') {
                finalResult = finalResult.replace(",", " ");
            }
        }
        return finalResult;
    }
    var values = _.values(initValues);

    return (
        <div>
            <ul>
                {keys?keys.map((key, index) => (
                    <li style={{ marginLeft: '15%' }} key={index}>
                        <span className="keyName">{UpperCaseArray(key)}:</span> "{values[index]}"
                    </li>
                )):<span>Sorry</span>}
            </ul>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={5} lg = {3}>
                    <Button fullWidth onClick={() => step(1)} variant="outlined" color="secondary">Back</Button>
                </Grid>
                <Grid item xs={5} lg = {3}>
                    <Button fullWidth onClick={() => { step(0); setValues({}); }} variant="outlined" color="secondary">Reset</Button>
                </Grid>
            </Grid>
        </div>
    )
}
