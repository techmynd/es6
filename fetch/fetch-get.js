  const apiCall = async () => {
    try {
      const response = await fetch("https://api.github.com/users/techsithgit");
      return await response.json();
    } catch (error) {
      return error;
    }
  };

apiCall().then(response => console.log(response));

// https://codepen.io/codepatel/pen/mgrpMe