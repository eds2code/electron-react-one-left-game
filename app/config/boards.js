const BOARDS = {
    Standard : {
      Pins:[
      'e','e','p','p','p','e','e',
      'e','e','p','p','p','e','e',
      'p','p','p','p','p','p','p',
      'p','p','p','h','p','p','p',
      'p','p','p','p','p','p','p',
      'e','e','p','p','p','e','e',
      'e','e','p','p','p','e','e',
      ],
      Rotation: 'rotate(0deg)',
      ClipPath: 'polygon(0% 25%, 25% 25%,25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%)'
    }
    ,
    Cross : {Pins:[
      'e','e','h','h','h','e','e',
      'e','e','h','p','h','e','e',
      'h','h','p','p','p','h','h',
      'h','h','h','p','h','h','h',
      'h','h','h','p','h','h','h',
      'e','e','h','h','h','e','e',
      'e','e','h','h','h','e','e',
    ],
    Rotation: 'rotate(0deg)',
    ClipPath: 'polygon(0% 25%, 25% 25%,25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%)'
  }
  ,
    Plus : {Pins:[
      'e','e','h','h','h','e','e',
      'e','e','h','p','h','e','e',
      'h','h','h','p','h','h','h',
      'h','p','p','p','p','p','h',
      'h','h','h','p','h','h','h',
      'e','e','h','p','h','e','e',
      'e','e','h','h','h','e','e',
    ],
    Rotation: 'rotate(0deg)',
    ClipPath: 'polygon(0% 25%, 25% 25%,25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%)'
  }
  ,
    Bench : {Pins:[
      'e','e','p','p','p','e','e',
      'e','e','p','p','p','e','e',
      'h','h','p','p','p','h','h',
      'h','h','p','h','p','h','h',
      'h','h','h','h','h','h','h',
      'e','e','h','h','h','e','e',
      'e','e','h','h','h','e','e',
    ],
    Rotation: 'rotate(0deg)',
    ClipPath: 'polygon(0% 25%, 25% 25%,25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%)'
  }
  ,
    Arrow : {Pins:[
      'e','e','h','p','h','e','e',
      'e','e','p','p','p','e','e',
      'h','p','p','p','p','p','h',
      'h','h','h','p','h','h','h',
      'h','h','h','p','h','h','h',
      'e','e','p','p','p','e','e',
      'e','e','p','p','p','e','e',
    ],
    Rotation: 'rotate(0deg)',
    ClipPath: 'polygon(0% 25%, 25% 25%,25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%)'
  }
  ,
    Pyramid : {Pins:[
      'e','e','h','h','h','e','e',
      'e','e','h','p','h','e','e',
      'h','h','p','p','p','h','h',
      'h','p','p','p','p','p','h',
      'p','p','p','p','p','p','p',
      'e','e','h','h','h','e','e',
      'e','e','h','h','h','e','e',
    ],
    Rotation: 'rotate(0deg)',
    ClipPath: 'polygon(0% 25%, 25% 25%,25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%)'
  }
  ,
    Diamond : {Pins:[
      'e','e','h','p','h','e','e',
      'e','e','p','p','p','e','e',
      'h','p','p','p','p','p','h',
      'p','p','p','h','p','p','p',
      'h','p','p','p','p','p','h',
      'e','e','p','p','p','e','e',
      'e','e','h','p','h','e','e',
    ],
    Rotation: 'rotate(0deg)',
    ClipPath: 'polygon(0% 25%, 25% 25%,25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%)'
  }
  ,
    "Big Square" : {Pins:[
      'p','p','p','p','p','p','p',
      'p','p','p','p','p','p','p',
      'p','p','p','h','p','p','p',
      'p','p','p','p','p','p','p',
      'p','p','p','p','p','p','p',
      'p','p','p','p','p','p','p',
      'p','p','p','p','p','p','p',
    ],
    Rotation: 'rotate(0deg)',
    ClipPath: null
  }
  ,
    French : {Pins:[
      'e','e','p','p','p','e','e',
      'e','p','p','p','p','p','e',
      'p','p','p','h','p','p','p',
      'p','p','p','p','p','p','p',
      'p','p','p','p','p','p','p',
      'e','p','p','p','p','p','e',
      'e','e','p','p','p','e','e',
    ],
    Rotation: 'rotate(0deg)',
    ClipPath: 'polygon(0 33.33%, 33.33% 0, 66.66% 0, 100% 33.33%, 100% 66.66%, 66.66% 100%, 33.33% 100%, 0 66.66%)'
  }
  ,
    "English Triangle" : {Pins:[
      'p','p','p','p','p',
      'p','p','p','p','e',
      'p','p','h','e','e',
      'p','p','e','e','e',
      'p','e','e','e','e'
    ],
    Rotation: 'rotate(45deg)',
    ClipPath: 'polygon(0% 0%, 112% 0%, 0% 112%)'
  }
  }

  export default BOARDS;
