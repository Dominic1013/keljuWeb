export const items = {
  links: [
    {
      id: 1,
      title: "關於我們",
      url: "/about",
      sublinks: [
        {
          id: 101,
          title: "關於革路",
          url: "/about/aboutKelju",
        },
        {
          id: 102,
          title: "最新消息",
          url: "/about/information", // 還沒寫
        },
      ],
    },
    {
      id: 2,
      title: "服務介紹",
      url: "/portfolio",
    },

    {
      id: 3,
      title: "精選文章",
      url: "/blog",
    },
    {
      id: 4,
      title: "聯繫我們",
      url: "/contact",
    },

    {
      id: 5,
      title: "泰武資訊",
      url: "/taiwu", // 還沒寫 記得把它變成一個資料夾，裡面放兩個內容。
      sublinks: [
        // {
        //   id: 501,
        //   title: "泰武資料",
        //   url: "/taiwu/taiwuInfo", // 還沒寫
        // },
        {
          id: 502,
          title: "合作商家",
          url: "/taiwu/shopInfo", // 還沒寫
        },
      ],
    },
  ],
  authenticatedLinks: [
    {
      id: 6,
      title: "後台管理",
      url: "/dashboard", // 做成一個資料夾，原本的頁面要記得轉成「文章撰寫」的頁面
      sublinks: [
        {
          id: 601,
          title: "消息撰寫",
          url: "/dashboard/informationWrite", // 還沒寫
        },
        {
          id: 602,
          title: "文章撰寫",
          url: "/dashboard/postWrite", //
        },
        { id: 603, title: "聯繫管理", url: "/dashboard/contactManagement" },
      ],
    },
  ],
};
