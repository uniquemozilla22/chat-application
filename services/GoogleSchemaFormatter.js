const GoogleSchemaFormatter = (data) => {
  const { sub, name, email, picture } = data;
  return {
    SocialID: sub,
    name,
    email,
    image: picture,
  };
};

export default GoogleSchemaFormatter;
