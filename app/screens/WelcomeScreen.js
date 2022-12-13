import React from 'react';

function WelcomeScreen(props) {
    return (
        <Image style={styles.mainImage} source={require("../assets/welcomescreenpic.png")}> </Image>
    );
}

const styles = StyleSheet.create({
    mainImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
    }
})

export default WelcomeScreen;