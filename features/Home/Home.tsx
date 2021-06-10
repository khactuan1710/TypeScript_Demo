import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import styles from './HomeStyle'
import Search from '../../common/components/search/Search'
import Friends from '../../common/components/friends/Friends'


export class Home extends Component {
    render() {



        return (
            <View style={styles.container}>
                <View style={styles.search}>

                    <Search />
                </View>
                <Friends />
            </View>
        )
    }
}

export default Home

