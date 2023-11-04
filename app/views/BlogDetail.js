import React, {useEffect, useState} from 'react';
import {Image, ScrollView, View, useWindowDimensions} from 'react-native';
import RenderHTML, {Text} from 'react-native-render-html';

const BlogDetail = ({route, navigation}) => {
  const [postLoaded, setPostLoaded] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postID, setPostID] = useState('');
  const {width} = useWindowDimensions();
  const {blogID} = route.params;

  const getPost = async () => {
    try {
      const response = await fetch(
        `https://public-api.wordperess.com/rest/v1.1/sites/myglobo,antics.wordpress.com/posts/${blogID}`,
      );
      const post = await response.json();
      setPostTitle(post.title);
      setPostImage(post.featured_image);
      setPostContent(post.content);
      setPostID(post.ID);
    } catch (error) {
      console.error(error);
    } finally {
      setPostLoaded(true);
    }
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blogTagStyles = {
    img: {display: 'none'},
  };

  const blogClassStyles = {
    blTitle: {marginLeft: 'auto', marginRight: 'auto'},
    blContent: {marginLeft: 10, marginRight: 10},
    blBack: {marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20},
  };

  const postDetails = {
    html: `
    <div class="blTitle">
        <h1>${postTitle}</h1>
    </div>

    <div class="blContent">
        ${postContent}
    </div>

    <div class="blBack">
        <a href=${postID} style="textDecorationLine: none; color: #000">
            <h2>GO BACK</h2>
        </a>
    </div>
    `,
  };

  const renderersProps = {
    a: {
      onPress(event, url, htmlAttribs, target) {
        navigation.navigate('Blog');
      },
    },
  };

  return (
    <View style={{paddingTop: 30}}>
      {postLoaded && (
        <ScrollView>
          <Image
            style={{width: '100%', height: 100}}
            source={{uri: postImage}}
          />
          <RenderHTML
            source={postDetails}
            tagsStyles={blogTagStyles}
            classesStyles={blogClassStyles}
            renderersProps={renderersProps}
            contentWidth={width}
          />
        </ScrollView>
      )}
      {!postLoaded && (
        <View style={{paddingTop: 20, alignItems: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default BlogDetail;
