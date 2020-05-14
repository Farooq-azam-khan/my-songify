import React from 'react'

import { Typography, Grid, Box } from '@material-ui/core'

import Playlist from './Playlist';

const SongCollectionGroup = ({ title, group }) => {
    return (
        <Box>
            <Typography variant="h4">{title}</Typography>
            {Object.entries(group).map(([group_name, songs], index) => {
                if (songs.length >= 1) {
                    return (
                        <Grid key={index} item>
                            <Playlist title={group_name} tileData={songs} />
                        </Grid>
                    )
                } else {
                    return (<h5>No Songs in '{group_name}'</h5>)
                }
            })}
        </Box>
    )
}

export default SongCollectionGroup
