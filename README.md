## Getting started

Find the root directory of your project and navigate to it through your terminal.

```bash
# list the the files of your current directory
ls
```

```bash
# change to the 'code/indecision-app' directory
cd code/indecision-app
```

For a detailed explanation,
[see Here](https://openclassrooms.com/en/courses/4614926-learn-the-command-line-in-terminal/4634356-navigate-your-system)

Run your development server:

```
npm run start
```

Check [localhost:3000](http://localhost:3000), You're good to go !

## Additional features

For training purposes, here are some possible additional features.

You may implement them on a new branch to keep `master` clean for indecision app stage 2.

### Sad message if bot is lazy :(

At refresh, there is no task selected and this message is displayed:

`Bot assigned you : -- No task selected yet --`

Replace this message by a custom one :

`This bot seems lazy. Click the button to let magic happen !`

tips:

- The condition stay the same
- Mainly a question of JSX / curly brackets wrapping

### Task description

Each task should have a proper description in addition of `name` and `id`.

- Add a description below the `name` in the task list.

- Add an input in the AddTask form.

tips:

- Don't forget to update the mocks data
- Use a new `useState` to store the value of the new input in the form, and the function to change that value.

### Not the same task twice in a row

Prevent bot to assign the user the same task twice in a row.
