import React from 'react';
import { StyleSheet, Dimensions, ImageBackground, View, SafeAreaView, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import { Headline, Text, Button } from 'react-native-paper';
const { width, height } = Dimensions.get('screen');
import { getRandomInt, gameResult } from '../../functions/player';

import winner1 from '../../Background/big-win-surprise-banner-comic-style/17792.jpg';
import winner2 from '../../Background/k-pow-word-comic-book-effect-yellow-background/464464-PFQ0QI-567.jpg';
import winner3 from '../../Background/comic-expression-text-omg-lightning-thunderbolt/428593-PDYSA3-107.jpg';
import winner4 from '../../Background/comic-speech-expression-with-text/17366.jpg';
import winner5 from '../../Background/pop-art-text-with-bubble-speech-design-gray-backdrop/428678-PDYSEQ-104.jpg';
import winner6 from '../../Background/pow-comic-speech-bubble-red-background/428669-PDYSEB-407.jpg';
import winner7 from '../../Background/retro-boom-speech-bubble-blue-background/428501-PDYS4R-324.jpg';
import winner8 from '../../Background/retro-comic-speech-bubbles-with-sound-effects/428600-PDYSAJ-286.jpg';
import winner9 from '../../Background/vintage-retro-style-omg-comic-speech-bubble/428663-PDYSDY-177.jpg';

import loser1 from '../../Background/lettering-oops-comic-text-sound-effects-yellow-background/464453-PFQ0PS-53.jpg';
import loser2 from '../../Background/lettering-oops-comic-text-sound-effects-speech-bubble-yellow-background/464460-PFQ0Q9-122.jpg';
import loser3 from '../../Background/lettering-oops-comic-text-sound-effects-yellow-background/464453-PFQ0PS-53.jpg';
import loser4 from '../../Background/speech-bubble-pop-art-style-background/648.jpg';
import loser5 from '../../Background/yellow-lettering-emotional-text-speech-bubble-with-elements-pink-background/428590-PDYS9Z-992.jpg';

const loserBackground = [
    loser5,
    loser4,
    loser3,
    loser2,
    loser1
];

const winnerBackground = [
    winner1,
    winner2,
    winner3,
    winner4,
    winner5,
    winner6,
    winner7,
    winner8,
    winner9,
];

class GameOver extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };

    constructor(props){
        super(props);
        console.log('*** GameOver Component ***');
        console.log('GameOver props=', props);
        this.userId = props.navigation.state.params.userId;
        this.isWon = props.navigation.state.params.isWon;
        this.state = {
            isReady: false,
            background: '',
            txtResult: '',
        }
    }

    componentDidMount(){
        console.log('*** GameOver componentDidMount ***');
        const { isWon, userId } = this;
        console.log('isWon=', isWon);
        console.log('userId=', userId);
        gameResult(userId, isWon);
        let i;
        if(isWon){
            this.setState({
                txtResult:'Congratulations!\nYou are the winner of the game',
                isReady: true,
            })
        }  else {
            this.setState({
                txtResult:"It's not that bad ...\n maybe you will win next time",
                isReady: true,
            })
        }
    }

    render(){
        if(!this.state.isReady){
            return(
                <ImageBackground source={require('../../Background/abstract-yellow-comic-zoom/923.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size='large' color='#6646ee' /> 
                    </View>
                </ImageBackground>               
            )
        } else {
            if(this.isWon){
                return( 
                    <ImageBackground source={require('../../Background/big-win-surprise-banner-comic-style/17792.jpg')} style={{width: '100%', height: '100%'}}>
                        <SafeAreaView>
                            <Text>{this.state.txtResult}</Text>
                            <Button onPress={() => this.props.navigation.navigate('Game')}>CLOSE</Button>
                        </SafeAreaView>
                    </ImageBackground>
                )
            } else {
                return( 
                    <ImageBackground source={require('../../Background/lettering-oops-comic-text-sound-effects-yellow-background/464453-PFQ0PS-53.jpg')} style={{width: '100%', height: '100%'}}>
                        <SafeAreaView>
                            <Text>{this.state.txtResult}</Text>
                            <Button onPress={() => this.props.navigation.navigate('Game')}>CLOSE</Button>
                        </SafeAreaView>
                    </ImageBackground>
                )
            }
        }
       
    }
    
}
export default GameOver;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        //backgroundColor: '#ecf0f1',
        paddingHorizontal: 10,
        //flexWrap: 'wrap',
    },
    container1: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: Constants.statusBarHeight,
        //backgroundColor: Colors.yellow100,
        width: width/1.1,
        borderRadius: 9,
        height: height/1.3,
        alignSelf: 'center',
    },
    users:{
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: width/1.1,
        height: height/9.2,
        alignSelf: 'flex-start',
        //backgroundColor: Colors.purple500,
    },
    remainingTime: {
        fontSize: 46,
    },
    animatable: {
        textAlign: 'center', 
        position: 'absolute',
        top: 10
    },
    optionBtn: {
        fontWeight:'bold',
        fontSize: 20
    },
    btn: {
        margin: 7,
        //margin: 10,
        borderRadius: 6,
        //borderColor: Colors.greenA700,
        borderWidth: 1,
        alignItems: 'center',
        width: width/1.3,
        //
        //backgroundColor: Colors.purple500, 
    },
    questionTxt: {
        fontWeight:'bold',
        margin: 12,
        fontSize: 19,
        //justifyContent: 'center',
        textAlign: 'center',
    },
    questionCon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        width: width/1.1,
        borderRadius: 9,
        height: height/4,
        margin: 10,
    },
    title: {
        fontWeight:'bold',
        fontSize: 20
    },
    header: {
        backgroundColor: '#8fbc8f'
    },
    item: {
        color: '#000000',
        backgroundColor: '#8fbc8f'
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTxt: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8
    },
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        //fontFamily: 'Menlo',
        marginBottom: 14
    }
  });