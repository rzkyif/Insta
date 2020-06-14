import React, {useState, useContext, useEffect} from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
import {TouchableIcon} from '.';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ThemeContext from '../contexts/ThemeContext';

export function PostBody({images, onLike, onComment, onShare, onFavorite}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [aspect, setAspect] = useState(1);
  const [liked, setLiked] = useState(false);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    if (images && images[selectedImage]) {
      const imgSrc = Image.resolveAssetSource(images[selectedImage]);
      setAspect(imgSrc.width / imgSrc.height);
    }
  }, [images, selectedImage]);

  const _renderItem = ({item, index}) => {
    return (
      <View style={s.postContentView} key={index}>
        <Image
          style={[s.postContentImage, {aspectRatio: aspect}]}
          source={item}
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        style={s.postContentCarousel}
        contentContainerCustomStyle={s.postContentCarousel}
        data={images}
        renderItem={_renderItem}
        itemWidth={Dimensions.get('window').width}
        sliderWidth={Dimensions.get('window').width}
        onSnapToItem={x => {
          setSelectedImage(x);
        }}
      />
      <View style={s.postContentBar}>
        <TouchableIcon
          style={s.postContentBarIcon}
          name="heart"
          size={28}
          color={liked ? '#ff0000' : theme.colors.foreground}
          onPress={() => {
            setLiked(oldLiked => !oldLiked);
            onLike(liked);
          }}
        />
        <TouchableIcon style={s.postContentBarIcon} name="comment" size={28} />
        <TouchableIcon style={s.postContentBarIcon} name="mail" size={28} />
        <Pagination
          dotsLength={images.length}
          activeDotIndex={selectedImage}
          containerStyle={s.postContentPagination}
          dotStyle={[
            s.postContentPaginationDots,
            {backgroundColor: theme.colors.foreground},
          ]}
          inactiveDotScale={0.8}
        />
        <TouchableIcon
          style={[s.postContentBarIcon, s.postContentBarIconRight]}
          name="star"
          size={28}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  postContentCarousel: {
    flexGrow: 0,
    flex: 0,
  },
  postContentPagination: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -7,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  postContentPaginationDots: {
    width: 7,
    height: 7,
    marginVertical: 0,
    marginHorizontal: -20,
  },
  postContentImage: {
    width: '100%',
    height: undefined,
    resizeMode: 'contain',
  },
  postContentBar: {
    flexDirection: 'row',
  },
  postContentBarIcon: {
    padding: 13,
  },
  postContentBarIconRight: {
    position: 'absolute',
    right: 0,
  },
});
