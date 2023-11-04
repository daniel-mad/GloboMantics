/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, View, useWindowDimensions, Text} from 'react-native';
import RenderHTML from 'react-native-render-html';

const BlogItem = props => {
  const {width} = useWindowDimensions();
  const renderersProps = {
    a: {
      onPress(event, url, htmlAttribs, target) {
        props.choosePost(props.id);
      },
    },
  };
  const blogItems = {
    html: `
    <a href=${props.id}
        style="text-decoration-line:none;
        color:#000;
        textAlign: center;
    >
        <img src=${props.imageSrc} />
        <h1>${props.title}</h1>
        ${props.excerpt}
    </a>
    `,
  };
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        borderStyle: 'solid',
      }}>
      <RenderHTML
        source={blogItems}
        renderersProps={renderersProps}
        contentWidth={width}
      />
    </View>
  );
};

const Blog = ({navigation}) => {
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [blogList, setBlogList] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        'https://public-api.wordperess.com/rest/v1.1/sites/myglobo,antics.wordpress.com/posts',
      );
      const globo = await response.json();
      setBlogList(Array.from(globo.posts));
    } catch (error) {
      console.log(error);
    } finally {
      setBlogLoaded(true);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const chooseBlog = blogID => {
    navigation.navigate('BlogDetails', {blogId: blogID});
  };
  return (
    <View>
      {blogLoaded && (
        <View style={{paddingTop: 40}}>
          <FlatList
            data={blogList}
            keyExtractor={item => item.ID.toString()}
            renderItem={({item}) => {
              <BlogItem
                id={item.ID}
                title={item.title}
                imageSrc={item.featured_image}
                excerpt={item.excerpt}
                choosePost={chooseBlog}
              />;
            }}
          />
        </View>
      )}
      {!blogLoaded && (
        <View style={{paddingTop: 30}}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default Blog;
