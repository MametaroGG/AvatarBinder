import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AvatarBinder",
  description: "VRChatアバター管理を、もっとスマートに。",
  base: '/AvatarBinder/',
  lang: 'ja-JP',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/AvatarBinder/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/AvatarBinder/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AvatarBinder' }],
    ['meta', { property: 'og:description', content: 'VRChatアバター管理を、もっとスマートに。' }],
    ['meta', { property: 'og:image', content: 'https://mametarogg.github.io/AvatarBinder/SNS埋め込み画像.png' }],
    ['meta', { property: 'og:url', content: 'https://mametarogg.github.io/AvatarBinder/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://mametarogg.github.io/AvatarBinder/SNS埋め込み画像.png' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'ガイド', link: '/guide/introduction' },
      { text: '機能紹介', link: '/features/library' },
      { text: 'よくある質問', link: '/faq' },
    ],
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'AvatarBinderとは', link: '/guide/introduction' },
          { text: 'インストール', link: '/guide/installation' },
          { text: 'クイックスタート', link: '/guide/quick-start' },
        ]
      },
      {
        text: '機能一覧',
        items: [
          { text: 'ライブラリ管理', link: '/features/library' },
          { text: 'アバターの登録', link: '/features/adding' },
          { text: '一括操作と修復', link: '/features/batch-tools' },
          { text: 'ゴミ箱と各種設定', link: '/features/history' },
        ]
      },
      {
        text: 'その他',
        items: [
          { text: 'よくある質問', link: '/faq' },
          { text: 'お問い合わせ', link: '/feedback' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/yQbmU9QshU' }
    ],
    footer: {
      copyright: '© 2026 豆々庵 AvatarBinder. All Rights Reserved.'
    },
    search: {
      provider: 'local'
    }
  }
})
