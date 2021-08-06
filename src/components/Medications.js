import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import fetchMeds from '../actions/medActions';
import MedicationList from '../lists/MedicationList';
import LoadingIndicator from './LoadingIndicator';
import ErrorPage from './ErrorPage';

class Medications extends PureComponent {
    componentDidMount() {
        this.props.fetchMeds()
      }
      
      handleLoading = () => {
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return (
            <MedicationList medications={this.props.medications.medications}/>
          )
        }
      }
    render() {
      if (!!this.props.loading) {
        return <LoadingIndicator/>
      }
  
      if (!!this.props.error) {
        return <ErrorPage error={this.props.error} />
      }
        return (
            <>
            <h1>Medications</h1>
            <div>
                {this.handleLoading()}
            </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
      medications: state.medications,
      loading: state.medications.loading
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {fetchMeds: () => dispatch(fetchMeds())}
  }

  // ----------------------
  // const mapStateToProps = (currentState) => {
  //   return {
  //     todos: currentState.todos.todos,
  //     loading: currentState.todos.loading,
  //     error: currentState.todos.error
  //   }
  // }
  
  // const mapDispatch = (dispatch) => {
  //   return {
  //     addTodo: (todo) => dispatch(addTodo(todo)),
  //     removeTodo: (todoId) => dispatch(removeTodo(todoId)),
  //     markComplete: (todoId, completionTime) => dispatch(markComplete(todoId, completionTime)),
  //     fetchTodos: (todos) => dispatch(fetchTodos(todos))
  //   }
  // }
  // -----------------------------------
  
  export default connect(mapStateToProps, mapDispatchToProps)(Medications)