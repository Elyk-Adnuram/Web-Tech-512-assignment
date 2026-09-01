// The Like button on each post must behave as follows:
// • Clicking Like increments the post's like counter by one in global state
// • Clicking Like again removes the user's like, decrementing the counter by one (toggle
// behaviour)
// • The Like button must change its visual appearance to indicate whether the current user
// has liked the post (e.g., filled vs outlined icon, colour change)
// • Like state must be updated in localStorage to persist across page refreshes

//  Each post must include a clearly labelled Delete button
// • Clicking Delete must trigger a confirmation dialog using window.confirm()
// • If the user confirms, the post must be removed from the global posts array in state
// • The posts array in localStorage must be updated accordingly
// • The post component must unmount and disappear from the feed immediately, without a
// page reload
