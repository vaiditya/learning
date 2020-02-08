import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    details: null,
    lesson: null,
    objective: null
  },
  mutations: {
    getAllDetails: state => {
      fetch("https://api.myjson.com/bins/qubzl")
        .then(res => res.json())
        .then(res => {
          state.details = {
            ...res,
            lessonDetails: res.lessonDetails.map(lesson =>
              //Check for all objectives completeness of a lesson
              // let complete = true;
              // lesson.objectiveDetails.map(objective => {
              //   if (!(objective.status && objective.status === "DONE")) {
              //     complete = false;
              //   }
              // });

              //Adding status field to objective as it is not provided by the api
              ({
                ...lesson,
                objectiveDetails: lesson.objectiveDetails.map(objective => ({
                  ...objective,
                  status: "DONE"
                })),
                complete: true
              })
            )
          };
          state.lesson = state.details.lessonDetails[0];
          state.objective = state.details.lessonDetails[0].objectiveDetails[0];
        });
    },
    selectLesson: (state, { lesson }) => {
      const lessonDetail = {
        ...lesson,
        objectiveDetails: lesson.objectiveDetails.map(objective => ({
          ...objective
        }))
      };
      state.lesson = {
        ...lessonDetail,
        objectiveDetails: lessonDetail.objectiveDetails.sort(
          (a, b) => a.order - b.order
        )
      };
      state.objective = lesson.objectiveDetails[0];
    },
    selectObjective: (state, { objective }) => {
      state.objective = objective;
    },
    changeStatus: (state, { status }) => {
      state.objective.status = status;
    },
    checkCompleteness: state => {
      state.details = {
        ...state.details,
        lessonDetails: state.details.lessonDetails.map(lesson =>
          //Check for all objectives completeness of a lesson
          {
            if (lesson.id === state.lesson.id) {
              const objectives = lesson.objectiveDetails.map(objective => {
                if (objective.id === state.objective.id) {
                  return { ...objective, status: state.objective.status };
                } else {
                  return { ...objective };
                }
              });
              let complete = true;
              objectives.map(objective => {
                if (!(objective.status && objective.status === "DONE")) {
                  complete = false;
                }
              });

              //Adding status field to objective as it is not provided by the api
              return {
                ...lesson,
                objectiveDetails: objectives,
                complete
              };
            } else {
              return { ...lesson };
            }
          }
        )
      };
    }
  }
});
