module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-do-virtuali",
      providerOptions: {
        key: env("DO_SPACE_ACCESS_KEY"),
        secret: env("DO_SPACE_SECRET_KEY"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        space: env("DO_SPACE_BUCKET"),
        cdn: env("DO_SPACE_CDN"),
        acl: "public-read", // default ACL
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
