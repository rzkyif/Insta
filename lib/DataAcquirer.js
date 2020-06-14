const profileExample = require('../resources/profile.jpeg');
const postExample = require('../resources/post.jpg');
const storyExample = require('../resources/story.jpg');

const userInfoTable = {
  '000000': {
    profileImage: profileExample,
    name: 'Rizky I. F.',
    username: 'rzkyif',
  },
  '000001': {
    profileImage: profileExample,
    name: 'Scooby Doo',
    username: 'scbdoo',
  },
  '000002': {
    profileImage: profileExample,
    name: 'Bob Macaroni',
    username: 'bobmacaroni93',
  },
  '000003': {
    profileImage: profileExample,
    name: 'John Lemon',
    username: 'jlemon',
  },
  '000004': {
    profileImage: profileExample,
    name: 'Mark Zuckerton',
    username: 'markzuckertonofficialaccount',
  },
  '000005': {
    profileImage: profileExample,
    name: 'Bob Maunakea',
    username: 'gunung',
  },
  '000006': {
    profileImage: profileExample,
    name: 'Alfredo Maunakea',
    username: 'gunung2',
  },
  '000007': {
    profileImage: profileExample,
    name: 'John Boricelli',
    username: 'jelli',
  },
  '000008': {
    profileImage: profileExample,
    name: 'Kinon Blatt',
    username: 'kiblat',
  },
  '000009': {
    profileImage: profileExample,
    name: 'Fredo Riconelli',
    username: 'fredrice',
  },
};

const postInfoTable = {
  '000000': {
    userId: '000000',
    location: 'Location 1',
    images: [postExample],
  },
  '000001': {
    userId: '000001',
    location: '-',
    images: [postExample, postExample],
  },
  '000002': {
    userId: '000002',
    location: 'Location 2',
    images: [postExample, postExample, postExample],
  },
  '000003': {
    userId: '000003',
    location: '-',
    images: [postExample, postExample],
  },
  '000004': {
    userId: '000004',
    location: '-',
    images: [postExample, postExample],
  },
  '000005': {
    userId: '000005',
    location: 'Location 3',
    images: [postExample, storyExample],
  },
  '000006': {
    userId: '000006',
    location: '-',
    images: [postExample, postExample],
  },
};

const userPostTable = {
  '000000': [
    '000000',
    '000001',
    '000002',
    '000003',
    '000004',
    '000005',
    '000006',
  ],
};

const userStoryTable = {
  '000000': [
    {userId: '000000', status: 'c'},
    {userId: '000001', status: 'c'},
    {userId: '000002', status: 's'},
    {userId: '000003', status: 's'},
    {userId: '000004', status: 's'},
    {userId: '000005', status: 's'},
    {userId: '000006', status: 'r'},
    {userId: '000007', status: 'r'},
    {userId: '000008', status: 'r'},
    {userId: '000009', status: 'r'},
  ],
};

export async function getPosts(userId, page, pageLength = 10) {
  let data = [];
  if (userId in userPostTable) {
    let postTable = userPostTable[userId];
    for (let i = 0; i < pageLength; i++) {
      let inc = page * pageLength + i;
      if (inc >= postTable.length) {
        break;
      }
      data.push(postTable[inc]);
    }
  }
  return data;
}

export async function getStories(userId, page, pageLength = 7) {
  let data = [];
  if (userId in userStoryTable) {
    let storyTable = userStoryTable[userId];
    for (let i = 0; i < pageLength; i++) {
      let inc = page * pageLength + i;
      if (inc >= storyTable.length) {
        break;
      }
      data.push(storyTable[inc]);
    }
  }
  return data;
}

export async function getUserInfo(userId) {
  let result = {
    profileImage: profileExample,
    name: 'placeholder',
    username: 'placeholder',
  };
  if (userId in userInfoTable) {
    result = userInfoTable[userId];
  }
  return result;
}

export async function getPostInfo(postId) {
  let result = {};
  if (postId in postInfoTable) {
    result = postInfoTable[postId];
  }
  return result;
}

export async function getUserPostInfo(userId, postIndex) {
  let result = {};
  if (userId in userPostTable) {
    let postTable = userPostTable[userId];
    if (postIndex < postTable.length) {
      result = getPostInfo(postTable[postIndex]);
    }
  }
  return result;
}
