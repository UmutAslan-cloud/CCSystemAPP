
export function loadLists() {
  return [
    { 
      title: 'Tasks', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Ahmet Kamil Ofis',
          labels: ['#7159c1'],
          user: 'Personal Number 42'
        },
        {
          id: 2,
          content: 'Mehmet Bey Ev',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 3,
          content: 'Nurdan Hanim Ofis',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 4,
          content: 'Kemal Bey Ev"',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 5,
          content: 'Olcan Bey Hastane',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
      ]
    },
    { 
      title: 'Progress', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Olcan Bey Ev',
          labels: [],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        }
      ]
    },
    { 
      title: 'Rewiew', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Ayse Hanim Ofis',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 8,
          content: 'Ahmet Bey Ofis',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 9,
          content: 'Kemalettin Bey Mutfak',
          labels: [],
        }
      ]
    },
    { 
      title: 'Done', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Korcan Bey Ev',
          labels: [],
        },
        {
          id: 12,
          content: 'Cenk Bey Ofis',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Recai Bey Ev',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}