/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface CompProps {
  title: string
}
class Component<T extends CompProps> {
  constructor (public props:T) {

  }
}

class Page extends Component <{ title: string}> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};