<template>
    <div></div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
onMounted(async() => {
  const CLIENT_ID = config.public.GOOGLECLIENTID;
const CLIENT_SECRET = config.public.GOOGLE_CLIENT_SECRET;
  console.log('====================================');
  console.log(router.currentRoute.value.query);
  const code=router.currentRoute.value.query
  const {
            data
        } = await axios.post('https://oauth2.googleapis.com/token', {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code',
        });
        console.log('data', data);
        const {
            access_token,
            id_token
        } = data;
        console.log('access_token', access_token);

        // Use access_token or id_token to fetch user profile
        const {
            data: profile
        } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        });
        console.log('data profile', profile);
        // Code to handle user authentication and retrieval using the profile data

  console.log('====================================');
});
</script>