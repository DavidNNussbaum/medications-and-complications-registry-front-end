const setToken = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};
  
const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const thirtyMinutes = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < thirtyMinutes) {
        return localStorage.getItem("token");
    }
};

export const signupUser = (userData) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              user: userData
            })
        }).then((resp) => {
            if (resp.ok) {
                return resp
                    .json()
                    .then((userJson) => {
                        setToken(userJson.token);
                        dispatch({ type: "SET_USER", user: userJson })
                    }
                    );
            } else {
                // return resp.json().then((errors) => {
                //     dispatch({ type: NOT_AUTHENTICATED });
                //     return Promise.reject(errors);
                // });
            }
        });
    };
};

export const loginUser = (userData) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/sessions", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              user: userData
            })
        }).then((resp) => {
            if (resp.ok) {
                return resp
                    .json()
                    .then((userJson) => {
                        setToken(userJson.token);
                        dispatch({ type: "SET_USER", user: userJson })
                    }
                        
                    );
            } else {
                // return resp.json().then((errors) => {
                //     dispatch({ type: NOT_AUTHENTICATED });
                //     return Promise.reject(errors);
                // });
            }
        });
    };
};

export const checkAuth = () => {
    return (dispatch) => {
      return fetch("http://localhost:3000/current_user", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then((res) => {

        if (res.ok) {
          return res
                  .json()
                  .then(user => {
                      dispatch({type: "SET_USER", user: user})})
        } else {
        //   return Promise.reject(dispatch({type: "LOGOUT_USER"}))
            dispatch({type: "LOGOUT_USER"})
        }
      })
      
    };
  };
