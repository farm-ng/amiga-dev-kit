def sense(p):
    """Simple outlier rejection filter for all analog inputs"""
    N = 100
    s = [p.value for i in range(N)]
    c = sorted(s)[40:60]
    return sum(c) // len(c)
