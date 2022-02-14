const tree = {
    value: 11,
    children: [
        {
            value: 10,
            children: [
                {
                    value: 77,
                    children: [
                        {
                            value: 7,
                            children: null,
                        },
                        {
                            value: 6,
                            children: null,
                        },
                    ]
                }
            ]
        },
        {
            value: 9,
            children: null,
        },
        {
            value: 8,
            children: [
                {
                    value: 5,
                    children: [
                        {
                            value: 3,
                            children: [
                                {
                                    value: 1,
                                    children: null
                                }
                            ]
                        },
                        {
                            value: 2,
                            children: null,
                        }
                    ]
                },
            ]
        }
    ]
}

module.exports = tree;