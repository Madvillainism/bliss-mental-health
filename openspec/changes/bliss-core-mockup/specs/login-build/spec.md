## ADDED Requirements

### Requirement: Splash intro screen
The system SHALL display an animated splash screen on first load with the BLISS logo, a tagline, and a fade-in gradient background. The splash SHALL auto-transition to the login screen after 2.5 seconds.

#### Scenario: Splash renders on first visit
- **WHEN** a user navigates to the app with no LocalStorage auth token
- **THEN** the splash screen SHALL display centered with the BLISS wordmark and "Your gentle path to calm" tagline
- **THEN** the background SHALL animate with the `bliss-soft-lavender` to `bliss-cream` gradient

#### Scenario: Splash auto-transitions
- **WHEN** 2.5 seconds have elapsed since splash mount
- **THEN** the splash SHALL fade out with the `fade-in` animation reversed
- **THEN** the router SHALL navigate to `/login`

### Requirement: Login/Register form
The system SHALL provide a login form (email + password) and a register form (name + email + password) with toggle between the two modes. Fields SHALL use Angular model() Signals for bidirectional binding.

#### Scenario: Login form renders
- **WHEN** the user navigates to `/login`
- **THEN** the login form SHALL display email and password inputs
- **THEN** a "Sign In" button SHALL be enabled when both fields are non-empty
- **THEN** a "Create account" link SHALL toggle to register mode

#### Scenario: Register form renders
- **WHEN** the user clicks "Create account"
- **THEN** the form SHALL switch to register mode showing name, email, and password fields
- **THEN** a "Sign Up" button SHALL be enabled when all fields are non-empty
- **THEN** a "Already have an account?" link SHALL toggle back to login mode

### Requirement: LocalStorage auth simulation
The system SHALL accept any non-empty email + password combination. On "login" or "register", the system SHALL generate a fake token string and persist it to LocalStorage. The MockAuthService SHALL expose an `isAuthenticated()` Signal.

#### Scenario: Login persists token
- **WHEN** the user fills email and password and clicks "Sign In"
- **THEN** MockAuthService SHALL generate a UUID-like token
- **THEN** `localStorage.setItem('bliss_auth_token', token)` SHALL be called
- **THEN** `isAuthenticated()` Signal SHALL emit `true`
- **THEN** the router SHALL navigate to `/dashboard`

#### Scenario: Register persists token
- **WHEN** the user fills name, email, password and clicks "Sign Up"
- **THEN** the name SHALL also be persisted to LocalStorage as `bliss_user_name`
- **THEN** the same token flow as login SHALL execute

#### Scenario: Auth state persists across refresh
- **WHEN** the app loads and `localStorage.getItem('bliss_auth_token')` returns a value
- **THEN** `isAuthenticated()` Signal SHALL initialize to `true` on service construction

### Requirement: Signal-based route guard
The system SHALL implement a standalone `canActivate` guard function that reads `MockAuthService.isAuthenticated()` and blocks navigation to `/dashboard` if false, redirecting to `/login`.

#### Scenario: Guard allows authenticated user
- **WHEN** `isAuthenticated()` returns `true`
- **THEN** the guard SHALL return `true` and navigation proceeds
- **THEN** the dashboard component SHALL render

#### Scenario: Guard blocks unauthenticated user
- **WHEN** `isAuthenticated()` returns `false`
- **THEN** the guard SHALL return `false`
- **THEN** the router SHALL redirect to `/login`
