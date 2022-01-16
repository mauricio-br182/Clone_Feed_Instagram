import React, {useState} from 'react'

import { 
        StyleSheet,
        Text,
        View,
        Image,
        ScrollView,
        SafeAreaView,
        TouchableOpacity
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

function InstaGitHubCard({githubUser}){

  const  [ liked, setLikeState ] = useState(false)
  return(
    <View>
      <View style={{flexDirection:'row', padding: 15, alignItens: 'center'}}>
        <Image
          source={{ uri: `http://github.com/${githubUser}.png` }}
          style={{
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
        <Text>{githubUser}</Text>
      </View>
      <View>
        <Image
          source={{ uri: `http://github.com/${githubUser}.png` }}
          style={{
            width: '100%',
            height: 350,
        
          }}
        />
      </View>
      <View style={{flexDirection:'row', padding: 15, alignItens: 'center'}}>
        <TouchableOpacity onPress={() => setLikeState(!liked)}>
        {liked && <AntDesign name="heart" size={24} color="red" />}
        {!liked && <AntDesign name="hearto" size={24} color="black" />}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          {
          [
            'mauricio-br182',
            'vweberfroes',
            'peas'
          ].map((githubUser) => 
            <InstaGitHubCard key={githubUser} githubUser={githubUser} />
          )}
      </ScrollView>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
