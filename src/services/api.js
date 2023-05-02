//api.js
const getVideoList = () => {
  const data = [
    {
      video_id: 'YudHcBIxlYw',
      thumb_img: 'https://i.ytimg.com/vi/YudHcBIxlYw/hqdefault.jpg',
      title: 'JISOO - ‘꽃(FLOWER)’ M/V',
      channelId: 'UCOmHUn--16B90oW2L6FRR3A',
      profile_img: 'https://yt3.googleusercontent.com/hZDUwjoeQqigphL4A1tkg9c6hVp5yXmbboBR7PYFUSFj5PIJSA483NB5v7b0XVoTN9GCku3tqQ=s176-c-k-c0x00ffffff-no-rj',
      channel_title: 'BLACKPINK',
      created_time: 1680262260,
      video_sec: 185,
      view_count: 88300,
    },
    {
      video_id: '1wvz8Rs7dgc',
      thumb_img: 'https://i.ytimg.com/vi/1wvz8Rs7dgc/hqdefault.jpg',
      title: '[리무진서비스] EP.56 만우절 특집 with 방탄소년단 지민 | April Fools\' Day Special with...',
      channelId: 'KBSKpop',
      profile_img: 'https://yt3.googleusercontent.com/XIrz2X4rxeRt59xggde9am7KqkZQ7e3TSaY3bZVWr6bWAVToAKNNH05ZAyovMCJySVxTjZHD=s176-c-k-c0x00ffffff-no-rj',
      channel_title: 'KBS Kpop',
      created_time: 1680348660,
      video_sec: 2039,
      view_count: 1160000,
    },
    {
      video_id: 'u9Y3hZ9UP9I',
      thumb_img: 'https://i.ytimg.com/vi/u9Y3hZ9UP9I/hqdefault.jpg',
      title: '풍자가 30번 넘게 간 강원도 원주 찐맛집 공개 | 또간집 EP.25',
      channelId: 'STUDIO_SUZE',
      profile_img: 'https://yt3.googleusercontent.com/QbyeYFIBzd_UcW-QwKBLjwbKy2U7syqwAr2V1oZA6WZFyhbVLcUk4Kn7YXqg5fMHEg3B9dusGrA=s176-c-k-c0x00ffffff-no-rj',
      channel_title: '재밌는 거 올라온다',
      created_time: 1680089460,
      video_sec: 2386,
      view_count: 1140000,
    },
  ];  
  return [...data, ...data, ...data, ];
}
  
  
  export { getVideoList };