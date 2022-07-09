import React from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons, Entypo, Octicons, Feather } from '@expo/vector-icons';
import styles from '../../styles';

const DashBoardScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to USaid Dashboard</Text>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{height: 200}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableHighlight style={styles.dashboardButton} onPress={() => { navigation.navigate('Application'); }}>
                                <View>
                                    <MaterialCommunityIcons name="connection" size={82} color="white" />
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.dashboardButton} onPress={() => {navigation.navigate('Pending Application'); }}>
                                <Entypo name="notification" size={82} color="white"  />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{height: 200}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableHighlight style={styles.dashboardButton} onPress={() => { navigation.navigate('Postings'); }}>
                                <Octicons name="feed-discussion" size={82} color="white" />
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.dashboardButton} onPress={() => { navigation.navigate('Settings'); }}>
                                <Feather name="settings" size={82} color="white" />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

export default DashBoardScreen;