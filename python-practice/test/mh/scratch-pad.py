# @title
import numpy as np

def bayesian_table_prediction(observation, tables, priors, count):
    """
    관측 데이터를 바탕으로 어느 테이블일 가능성이 높은지 계산한다
    """
    categories = list(tables.keys())
    table_names = list(tables[categories[0]].keys())

    for _ in range(count):
        likelihoods = np.array([tables[observation][T] for T in table_names])
        marginal_likelihood = np.sum(likelihoods * priors)
        priors = (likelihoods * priors) / marginal_likelihood

    return dict(zip(table_names, priors))

tables = {
    '소금': {'중테이블': 0.02, '소테이블': 0.03, '대테이블': 0.01},
    '대은': {'중테이블': 0.12, '소테이블': 0.10, '대테이블': 0.14},
    '대금': {'중테이블': 0.02, '소테이블': 0.01, '대테이블': 0.03},
    '그 외': {'중테이블': 0.84, '소테이블': 0.86, '대테이블': 0.82}
}

category_map = {
    1: '소금',
    2: '대은',
    3: '대금',
    4: '그 외'
}

priors = np.array([1/3, 1/3, 1/3])
table_names = ['중테이블', '소테이블', '대테이블']

print("=" * 50)
print("몬헌 사이즈 금왕관 수집을 효율화하는 도구!")
print("관측 데이터를 입력하면 어느 테이블에 있는지 추정합니다.")
print("작은 사이즈를 효율적으로 노리는 데 활용하세요!")
print("=" * 50)

while True:
    print("\n관측한 사이즈를 입력해 주세요:")
    for num, category in category_map.items():
        print(f"{num}: {category}")
    print("0: 종료")

    try:
        category_num = int(input("번호 입력 (예: 1 → 소금): ").strip())
        if category_num == 0:
            break

        if category_num not in category_map:
            print("잘못된 입력입니다. 올바른 번호를 입력해 주세요.")
            continue

        count = int(input(f"{category_map[category_num]}이(가) 몇 번 나왔는지 입력: ").strip())
        if count <= 0:
            print("잘못된 입력입니다. 1 이상의 숫자를 입력해 주세요.")
            continue

        observation = category_map[category_num]
        posterior_probs = bayesian_table_prediction(observation, tables, priors, count)
        priors = np.array([posterior_probs[T] for T in table_names])

        print("\n🔍 현재 테이블 추정 확률:")
        for table, prob in posterior_probs.items():
            print(f"{table}: {prob:.2%}")
        print("-" * 50)

    except ValueError:
        print("잘못된 입력입니다. 숫자를 입력해 주세요.")
